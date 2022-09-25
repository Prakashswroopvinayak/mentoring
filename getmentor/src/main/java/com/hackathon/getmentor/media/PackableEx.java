package com.hackathon.getmentor.media;

public interface PackableEx extends Packable {
    void unmarshal(ByteBuf in);
}
