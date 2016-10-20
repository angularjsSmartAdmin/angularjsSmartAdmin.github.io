$.validator.addMethod("pattern",function(value,element,param){if(this.optional(element)){return true;}if(typeof param==="string"){param=new RegExp("^(?:"+param+")$");}return param.test(value);},"Value doesnt match the required format.");
// jQuery.extend(jQuery.validator.messages, {
//     required: "This field is required.",
//     pattern: "Value doesnt match the required format."
// });
