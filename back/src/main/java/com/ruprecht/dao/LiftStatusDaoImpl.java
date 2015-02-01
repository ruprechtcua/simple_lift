package com.ruprecht.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ruprecht.model.LiftStatus;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public class LiftStatusDaoImpl {

    @PersistenceContext
    private EntityManager em;

    public Long save(LiftStatus status) {
        em.persist(status);
        return status.getId();
    }

    public List<LiftStatus>getAll() {
        return em.createQuery("SELECT s FROM LiftStatus s", LiftStatus.class).getResultList();
    }

    public List<LiftStatus>getAllByKey(String key) {
        return em.createQuery("SELECT s FROM LiftStatus s WHERE s.key="+key, LiftStatus.class).getResultList();
    }
}