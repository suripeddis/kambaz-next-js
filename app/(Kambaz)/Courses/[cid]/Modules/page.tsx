"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { setModules, editModule } from "./reducer";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modulesList = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modulesList));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const onCreateModule = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const createdModule = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, createdModule]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m) => m._id !== moduleId)));
  };

  const onUpdateModule = async (moduleData) => {
    await client.updateModule(moduleData);
    const newModules = modules.map((m) => (m._id === moduleData._id ? moduleData : m));
    dispatch(setModules(newModules));
  };

  return (
    <div id="wd-modules" className="wd-main-content-offset p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Modules</h2>
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={onCreateModule}
        />
      </div>

      <ListGroup id="wd-modules-list" className="rounded-0">
        {modules.map((mod) => (
          <ListGroup.Item
            key={mod._id}
            className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center flex-wrap">
              <BsGripVertical className="me-2 fs-3 text-dark" />
              {!mod.editing && <span>{mod.name}</span>}
              {mod.editing && (
                <FormControl
                  className="w-auto d-inline-block"
                  onChange={(e) =>
                    dispatch(setModules(
                      modules.map((m) =>
                        m._id === mod._id ? { ...m, name: e.target.value } : m
                      )
                    ))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...mod, editing: false });
                    }
                  }}
                  defaultValue={mod.name}
                />
              )}
            </div>

            <ModuleControlButtons
              moduleId={mod._id}
              deleteModule={(moduleId) => onRemoveModule(moduleId)}
              editModule={(moduleId) => dispatch(editModule(moduleId))}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}