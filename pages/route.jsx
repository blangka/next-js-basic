import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Route = () => {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <div>
            <button type="button" onClick={() => router.push("/tomato")}>
                tomato 가기
            </button>
            <p>이름</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
                {name} 으로 바로 가기
            </button>
        </div>
    );
};

export default Route;
