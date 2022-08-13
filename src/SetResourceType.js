import ResourceData from "./ResourceData";
import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
  useRef,
} from "react";

export default function SetResourceType() {
  const [resourceType, setresourceType] = useState("posts");
  return (
    <>
      <button onClick={() => setresourceType("posts")}>Posts</button>
      <button onClick={() => setresourceType("comments")}>Comments</button>
      <button onClick={() => setresourceType("albums")}>Albums</button>
      <h1>{resourceType}</h1>
      <h1>
        <ResourceData resourceType={resourceType} />
      </h1>
    </>
  );
}
