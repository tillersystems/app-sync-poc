export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-1",
        BUCKET: "boiler-plate-api-dev-attachmentsbucket-15bueh56fidbz"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://jyvi4yyci7.execute-api.eu-west-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_NDSCR9EbL",
        APP_CLIENT_ID: "29jsk4kdu0ektu69uvlrtvai9q",
        IDENTITY_POOL_ID: "eu-west-1:4d3c9941-2c4b-4201-9a6f-7c57fa6d5085"
    }
};
