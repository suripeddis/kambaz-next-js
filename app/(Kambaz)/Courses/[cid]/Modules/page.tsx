/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  addModule,
  deleteModule,
  editModule,
  updateModule,
} from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-modules" className="wd-main-content-offset p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Modules</h2>
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        />
      </div>

      <ListGroup id="wd-modules-list" className="rounded-0">
        {modules
          .filter((m: any) => m.course === cid)
          .map((module: any) => (
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
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
              </div>

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
