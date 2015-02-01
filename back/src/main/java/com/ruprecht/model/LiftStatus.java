package com.ruprecht.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by ruprecht on 1/02/15.
 */
@Entity
public class LiftStatus {

    @Id
    @GeneratedValue
    private Long id;

    private String key;
    private String action;
    private String load;

    public LiftStatus(){
    }

    public LiftStatus(String key, String action, String load) {
        this.key = key;
        this.action = action;
        this.load = load;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getLoad() {
        return load;
    }

    public void setLoad(String load) {
        this.load = load;
    }
}
