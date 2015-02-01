package com.ruprecht.controller;

import com.ruprecht.dao.LiftStatusDaoImpl;
import com.ruprecht.model.LiftStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class LiftController {
    private Logger logger=LoggerFactory.getLogger(LiftController.class);

    @Autowired
    private LiftStatusDaoImpl liftStatusDao;

    @RequestMapping(value = "/status/{key}", method = RequestMethod.GET, produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    List<LiftStatus> getStatusByKey(@PathVariable String key){
        return liftStatusDao.getAllByKey(key);
    }

    @RequestMapping(value = "/status/create", method = RequestMethod.GET, produces = {"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    LiftStatus addStatus(@RequestParam(value="key", required=true) String key, @RequestParam(value="action", required=true) String action, @RequestParam(value="load", required=true) String load){
        LiftStatus status = new LiftStatus(key,action,load);
        liftStatusDao.save(status);
        return status;
    }

}
