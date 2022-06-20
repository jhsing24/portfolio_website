import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '5pr1oysg', 
    dataset: 'production',
    apiVersion: '2022-06-19',
    useCdn: true,
    token: 'skNtDpTsxmqA9Q7bQ8XA5lyo1rro6XuWw6zjtaNfpvCspJZ5K3PTy2m0hkdUiIRxaotu5CdDobniFAW301TpVr9oOdyXWRN0eVkEaYctvuOyNNwylL8a03DQBEvUjD8ALzr15g5UPcrInP1CWcFABf9TlofHeYx6mmooQ5s9uMUWt5reDcxY'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);