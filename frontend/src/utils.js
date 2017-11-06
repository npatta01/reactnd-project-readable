import javascriptTimeAgo from 'javascript-time-ago'

// Load locale specific relative date/time messages
//
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))


const timeAgoEnglish = new javascriptTimeAgo('en-US')


export const timeAgo = (date) => {
    return timeAgoEnglish.format(date)
}