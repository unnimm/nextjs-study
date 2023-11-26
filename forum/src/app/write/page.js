"use client"
import { useState } from "react";

export default function Write() {
    const [data, setData] = useState();
    
  return (
    <>
      <div>글 작성</div>
      <form action="/api/post/new" method="POST">
        <input name="login"></input>
        <input name="password"></input>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
