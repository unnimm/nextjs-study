"use client"
import { useState } from "react";

export default function Write() {
    const [data, setData] = useState();
    
  return (
    <>
      <div>글 작성</div>
      <form action="/api/post/new" method="POST">
        <input name="title"></input>
        <input name="content"></input>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
