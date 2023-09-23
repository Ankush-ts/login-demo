import { data } from "@/data";
import { withSession } from "@/session";

const handler= async function(req, res) {
  const { userName, password } = req.body;
    // console.log(userName, password);

  const user = data.find((item) => item.username == userName);

  if (user && user.password == password) {
    req.session.set("user", user);   // key : value pair
    await req.session.save(); // Cookie will get created
    
    res.status(200).json({ message: "user authenticated" });
  } else {
    res.status(403).json({ message: "username or password is wrong" });
  }
};
export default withSession(handler);