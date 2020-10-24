export const getSpeechFromText = async text => {
    return fetch('https://functions.yandexcloud.net/d4e56gbmv9j4bv2g6tmp', {
        method: 'POST',
        body: JSON.stringify({ text }),
    }).then(res => res.blob());
};
