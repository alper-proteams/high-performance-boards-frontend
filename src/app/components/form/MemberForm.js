"use client";

import React, { useState } from "react";
import Button from "@/app/components/button";

const MemberForm = () => {
  const [memberRecords, setMemberRecords] = useState([
    { name: "", good: "", lack: "" },
  ]);

  const addMemberRecord = () => {
    setMemberRecords([...memberRecords, { name: "", good: "", lack: "" }]);
  };

  const removeMemberRecord = (index) => {
    const updatedRecords = [...memberRecords];
    updatedRecords.splice(index, 1);
    setMemberRecords(updatedRecords);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRecords = [...memberRecords];
    updatedRecords[index][field] = value;
    setMemberRecords(updatedRecords);
  };

  return (
    <form className="container">
      <div className="flex flex-col w-8/12 mx-auto bg-secondary-gray p-4 gap-3">
        {memberRecords.map((record, index) => (
          <div className="flex gap-1" key={index}>
            <input
              className=" w-1/3"
              name={`member-name-${index}`}
              type="text"
              value={record.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <input
              className=" w-1/3"
              name={`member-good-${index}`}
              type="number"
              value={record.good}
              onChange={(e) => handleInputChange(index, "good", e.target.value)}
            />
            <input
              className=" w-1/3"
              name={`member-lack-${index}`}
              type="lack"
              value={record.lack}
              onChange={(e) => handleInputChange(index, "lack", e.target.value)}
            />

            {index === memberRecords.length - 1 && (
              <div
                className="extra-fields-member w-12 bg-primary-red text-white"
                onClick={addMemberRecord}
              >
                +
              </div>
            )}

            {index !== memberRecords.length - 1 && (
              <div
                className="remove-field btn-remove-member w-12 bg-primary-red text-white"
                onClick={() => removeMemberRecord(index)}
              >
                -
              </div>
            )}
          </div>
        ))}
        <Button type="submit" className={"w-max mx-auto"}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default MemberForm;
