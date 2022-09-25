package com.hackathon.getmentor.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.getmentor.media.RtcTokenBuilder;
import com.hackathon.getmentor.media.RtcTokenBuilder.Role;
import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.RtcDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/rtctoken")
public class RtcTokenGeneratorController {
	static String appId = "628aee40afb34b789f77cdf9c8e88127";
    static String appCertificate = "625b0cd08cf241dcb7d6b787f20aefc9";
    static int expirationTimeInSeconds = 3600;
	
	@PostMapping("/")
	public String tokenGenerator(@RequestBody RtcDetails rtcdetails) throws Exception{
		//System.out.print("got here");
		RtcTokenBuilder token = new RtcTokenBuilder();
		String channelName = rtcdetails.getChannelName();
	    Long uid = rtcdetails.getUserId();
	    //System.out.print(channelName);
	    //System.out.print(uid);
        int timestamp = (int)(System.currentTimeMillis() / 1000 + expirationTimeInSeconds);
        /*String result = token.buildTokenWithUserAccount(appId, appCertificate,  
        		 channelName, userAccount, Role.Role_Publisher, timestamp);
        System.out.println(result);
        */
        String result = token.buildTokenWithUid(appId, appCertificate,  
       		 channelName, uid, Role.Role_Publisher, timestamp);
        return result;
	}

}
