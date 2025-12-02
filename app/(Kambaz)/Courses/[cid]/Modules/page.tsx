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
  const dispatch = useDispatch();

  const modules = useSelector((state: any) => state.modulesReducer.modules);

  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    if (!cid) return;
    const modulesList = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modulesList));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const onCreateModule = async () => {
    if (!cid || !moduleName.trim()) return;

    const created = await client.createModuleForCourse(cid as string, {
      name: moduleName,
    });

    dispatch(setModules([...modules, created]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (updated: any) => {
    await client.updateModule(updated);

    const newList = modules.map((m: any) =>
      m._id === updated._id ? updated : m
    );

    dispatch(setModules(newList));
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
        {modules.map((mod: any) => (
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
                  defaultValue={mod.name}
                  onChange={(e) =>
                    dispatch(
                      setModules(
                        modules.map((m: any) =>
                          m._id === mod._id
                            ? { ...m, name: e.target.value }
                            : m
                        )
                      )
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...mod, editing: false });
                    }
                  }}
                />
              )}
            </div>

            <ModuleControlButtons
              moduleId={mod._id}
              deleteModule={() => onRemoveModule(mod._id)}
              editModule={() => dispatch(editModule(mod._id))}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
