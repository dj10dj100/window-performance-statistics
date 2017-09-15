export const getTiming = () => {
    
    if (!window || !window.performance) { return; }
    let perfData = performance.timing;

    return {

        //page load
        pageComplete: perfData.loadEventEnd - perfData.navigationStart,

        //responseTime
        responseTime: perfData.responseEnd - perfData.requestStart,

        //page render time
        domComplete: perfData.domComplete - perfData.domLoading,

        //dns lookup
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,

        //time to first byte
        ttfb: perfData.responseStart - perfData.navigationStart,

        //time to interactive
        tti: perfData.domInteractive - perfData.domLoading

    }
}
