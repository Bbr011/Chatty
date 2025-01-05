export const login = async(req, res) => {
    res.send("login user");
}

export const register = async(req, res) => {
    try{
        const {name,username,password,consirmpassword,sex} = req.body;
    }catch(error){}
}

export const logout = async(req, res) => {
    res.send("logout user");
}