/**
 * @typedef {Object} TimingResponse
 * @property {number} pageComplete Page load time, from initial request => complete
 * @property {number} responseTime Server response time
 * @property {number} domComplete Time from response to domComplete firing
 * @property {number} dns DNS lookup timing
 * @property {number} ttfb Time to first byte
 * @property {number} tti Time took for DOM to be interactive
 *
 * @returns {TimingResponse} 
 *         Page load performance metrics
 */
const getTiming = () => {
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
};

export default getTiming;