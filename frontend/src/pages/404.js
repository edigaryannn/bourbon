import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <main>
            <div className="error-cont">
                <h1>This page is not found.</h1>
                <p>Return to <Link to={"/"} className="error-tohome">Home</Link></p>
            </div>
        </main>
    )
}