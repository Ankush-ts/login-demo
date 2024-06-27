import { useRouter } from "next/router";
import { useState } from "react";


export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const formSubmit = async (event) => {
        event.preventDefault();
        try {

            // const res=await fetch('/api/Login')
            // console.log('api called from the client');

            const res = await fetch("/api/Login", {
                body: JSON.stringify({ username, password }),
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            const jsonResponse = res.json();
            // console.log(jsonResponse);
            router.push("/");
        }

        catch (e) {
            console.error(e)
        }

    };

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        onChange={(e) => setUserName(e.target.value)}
                    />

                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>
                <button className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    );
}
