import awsSdk from "aws-sdk";
import awsXRay from "aws-xray-sdk";

awsXRay.captureAWS(awsSdk);
