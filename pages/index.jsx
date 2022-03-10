import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <div>
            <p>hello</p>
        </div>
    );
};

export default App;
