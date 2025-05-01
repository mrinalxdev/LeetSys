import type { Question } from './questions';

export const moreEasyQuestions: Question[] = [
  // ... existing code ... <original 17 easy questions>
];

export const moreMediumQuestions: Question[] = [
   {
    id: 'm9',
    title: 'Design a distributed message queue',
    difficulty: 'medium',
    subtopics: [
      { 
        id: 'm9-s1', 
        title: 'Message Broker', 
        completed: false,
        guidance: `Implement the core message broker component that receives, stores, and forwards messages.
        - Use a durable storage system (like disk) for message persistence
        - Implement message acknowledgments for reliable delivery
        - Consider using a log-based architecture like Kafka for high throughput`
      },
      { 
        id: 'm9-s2', 
        title: 'Pub/Sub Model', 
        completed: false,
        guidance: `Design the publish-subscribe messaging pattern.
        - Implement topics for message categorization
        - Allow multiple consumers to subscribe to the same topic
        - Consider consumer groups for parallel processing
        - Implement message filtering capabilities`
      },
      { 
        id: 'm9-s3', 
        title: 'Message Persistence', 
        completed: false,
        guidance: `Ensure messages are not lost in case of failures.
        - Store messages on disk with write-ahead logging
        - Implement replication across multiple nodes
        - Consider retention policies for message cleanup
        - Provide options for different durability levels (e.g., in-memory for performance vs. disk for reliability)`
      },
      { 
        id: 'm9-s4', 
        title: 'Fault Tolerance', 
        completed: false,
        guidance: `Design the system to handle failures gracefully.
        - Implement leader election for broker nodes
        - Use replication to prevent data loss
        - Design automatic failover mechanisms
        - Consider rack-aware placement for high availability`
      },
      { 
        id: 'm9-s5', 
        title: 'Scalability', 
        completed: false,
        guidance: `Ensure the system can handle increasing loads.
        - Design for horizontal scaling of brokers
        - Implement partitioning/sharding of topics
        - Consider separate control plane and data plane
        - Optimize for both high throughput and low latency`
      },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed message queue system like RabbitMQ or Kafka. Consider fault tolerance, message delivery guarantees, and scaling.'
  },
];

export const moreHardQuestions: Question[] = [
  
];
