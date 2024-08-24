const randomNumber=()=>{
    return Math.floor(Math.pow(10, 9-1) + Math.random() * 9 * Math.pow(10, 9-1));
}
export default randomNumber