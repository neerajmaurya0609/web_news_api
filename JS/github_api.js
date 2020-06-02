//es7(ecma2017) onwards async and await (ontop of promises);

// An async function is a function declared with 
// the async keyword.Async functions are instances of
// the AsyncFunction constructor, and the await keyword
// is permitted within them.The async and await keywords
// enable asynchronous, promise - based behavior to be
// written in a cleaner style, avoiding the need to
// explicitly configure promise chains.


let url = "https://api.github.com/users";

//to convert normal function into asynchronous

let findGitUsers = async () => {
    // window.fetch(url).then(data => {
    //     data.json().then().catch()
    // }).catch(err => console.log(err))
    //....................
    // let data = await window.fetch(url);
    // let response = await data.json();
    // console.log(response);
    //................
    try {
        let data = await window.fetch(url);
        let response = await data.json();
        console.log(response); 
    } catch (error) {
        console.log(error)
    }
};
// findGitUsers();