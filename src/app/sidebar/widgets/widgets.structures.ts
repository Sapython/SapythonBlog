export type WidgetsType = {
    widget:'testimonials' | 'actionButton' | 'subscribe' | 'postCarousel' | 'tagCloud' | 'socialButtons' | 'youtubeEmbed' | 'twitterFeed' | 'poll' | 'survey';
    data:any;
}
export type ActionButton = {
    title:string;
    message:string;
    buttonText:string;
    buttonLink:string;
    buttonLinkTarget:string;
    function:any;
    image:string;
}
