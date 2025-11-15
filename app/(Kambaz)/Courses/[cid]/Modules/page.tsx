/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const onCreateModule = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => (m._id === module._id ? module : m));
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
        {modules.map((module: any) => (
          <ListGroup.Item
            key={module._id}
            className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center flex-wrap">
              <BsGripVertical className="me-2 fs-3 text-dark" />
              {!module.editing && <span>{module.name}</span>}
              {module.editing && (
                <FormControl
                  className="w-auto d-inline-block"
                  onChange={(e) =>
                    dispatch(setModules(
                      modules.map((m: any) =>
                        m._id === module._id ? { ...m, name: e.target.value } : m
                      )
                    ))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
            </div>

            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={(moduleId) => onRemoveModule(moduleId)}
              editModule={(moduleId) => dispatch(editModule(moduleId))}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}