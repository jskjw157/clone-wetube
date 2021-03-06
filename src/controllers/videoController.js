const fakeUser = {
    username: "Jiwon",
    loggedIn: true,
};

export const trending = (req, res) =>{
    const videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt:"2 minutes ago:",
            view:59,
            id: 1,
        },
        {
            title: "Secon Video",
            rating:5,
            comments:2,
            createdAt:"2 minutes ago:",
            view:59,
            id: 1,
        },
        {
            title: "Third Video",
            rating:5,
            comments:2,
            createdAt:"2 minutes ago:",
            view:59,
            id: 1,
        }
    ];
    res.render("home", {pageTitle: "Home", fakeUser,  videos});
} 
    
export const see = (req, res) => {
    res.render("watch");
}
export const edit = (req,res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");