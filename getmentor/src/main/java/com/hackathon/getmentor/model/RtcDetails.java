package com.hackathon.getmentor.model;

import javax.persistence.Id;

public class RtcDetails {
	
	private Long userId;
	private String channelName;
	public RtcDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RtcDetails(Long userId, String channelName) {
		super();
		this.userId = userId;
		this.channelName = channelName;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getChannelName() {
		return channelName;
	}
	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}
	

}
