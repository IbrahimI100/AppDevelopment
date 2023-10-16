package com.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.FeedbackEntity;
import com.repository.FeedbackRepository;




@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public FeedbackEntity saveFeedback(String feedback) {
    	FeedbackEntity feedbackEntity = new FeedbackEntity();
        feedbackEntity.setFeedback(feedback);
        System.out.println(feedback);
        return feedbackRepository.save(feedbackEntity);
        }
}
