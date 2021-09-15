export default function facebookLogout() {
    FB.logout((response) => {
        console.log('looged out of facebook');
        window.document.location.reload();
    })  
}