export default function scriptDownload(url: string) {

    // Check if the script is already injected
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src === url) {
            console.log('BudPay Script already added to DOM');
            return;
        }
    }

    // Define the script URL you want to inject
    const scriptUrl = url;

    // Create a new script element
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    // Append the script element to the body
    document.body.appendChild(script);

    script.onload = () => {
        console.log('Script loaded');
    };
}