 //* using the custom error class to generate the custom error and custom status code 
 class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status=   status;
        this.message = message
    }
 };
 module.exports= ExpressError;