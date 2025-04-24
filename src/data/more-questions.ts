import type { Question } from './questions';

export const moreEasyQuestions: Question[] = [
  // ... existing code ... <original 17 easy questions>
];

export const moreMediumQuestions: Question[] = [
  {
    id: 'm4',
    title: 'Design Twitter\'s timeline feature',
    difficulty: 'medium',
    subtopics: [
      { id: 'm4-s1', title: 'Data Model', completed: false },
      { id: 'm4-s2', title: 'Feed Generation', completed: false },
      { id: 'm4-s3', title: 'Caching Strategy', completed: false },
      { id: 'm4-s4', title: 'Real-time Updates', completed: false },
      { id: 'm4-s5', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design Twitter\'s home timeline feature. Consider how to efficiently display tweets from followed users in reverse chronological order.'
  },
  {
    id: 'm5',
    title: 'Design a notification system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm5-s1', title: 'Notification Service', completed: false },
      { id: 'm5-s2', title: 'Delivery Channels', completed: false },
      { id: 'm5-s3', title: 'User Preferences', completed: false },
      { id: 'm5-s4', title: 'Scaling Strategy', completed: false },
      { id: 'm5-s5', title: 'Reliability Considerations', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a scalable notification system that can send notifications via multiple channels (email, push, SMS). Consider delivery guarantees and user preferences.'
  },
  {
    id: 'm6',
    title: 'Design a URL shortening service',
    difficulty: 'medium',
    subtopics: [
      { id: 'm6-s1', title: 'URL Shortening Algorithm', completed: false },
      { id: 'm6-s2', title: 'Database Schema', completed: false },
      { id: 'm6-s3', title: 'Caching Layer', completed: false },
      { id: 'm6-s4', title: 'Analytics', completed: false },
      { id: 'm6-s5', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a URL shortening service like bit.ly. Consider how to generate short URLs, handle redirects, and track analytics.'
  },
  {
    id: 'm7',
    title: 'Design a content delivery network',
    difficulty: 'medium',
    subtopics: [
      { id: 'm7-s1', title: 'Edge Server Distribution', completed: false },
      { id: 'm7-s2', title: 'Content Caching', completed: false },
      { id: 'm7-s3', title: 'Request Routing', completed: false },
      { id: 'm7-s4', title: 'Origin Fallback', completed: false },
      { id: 'm7-s5', title: 'Cache Invalidation', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a content delivery network (CDN) for efficient content distribution. Consider global distribution, caching strategies, and origin server architecture.'
  },
  {
    id: 'm8',
    title: 'Design a news feed system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm8-s1', title: 'Feed Generation', completed: false },
      { id: 'm8-s2', title: 'Content Ranking', completed: false },
      { id: 'm8-s3', title: 'Caching Strategy', completed: false },
      { id: 'm8-s4', title: 'Real-time Updates', completed: false },
      { id: 'm8-s5', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a news feed system like Facebook\'s. Consider feed generation, content ranking, and real-time updates.'
  },
  {
    id: 'm9',
    title: 'Design a distributed message queue',
    difficulty: 'medium',
    subtopics: [
      { id: 'm9-s1', title: 'Message Broker', completed: false },
      { id: 'm9-s2', title: 'Pub/Sub Model', completed: false },
      { id: 'm9-s3', title: 'Message Persistence', completed: false },
      { id: 'm9-s4', title: 'Fault Tolerance', completed: false },
      { id: 'm9-s5', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed message queue system like RabbitMQ or Kafka. Consider fault tolerance, message delivery guarantees, and scaling.'
  },
  {
    id: 'm10',
    title: 'Design a collaborative editing system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm10-s1', title: 'Concurrency Control', completed: false },
      { id: 'm10-s2', title: 'Conflict Resolution', completed: false },
      { id: 'm10-s3', title: 'Real-time Sync', completed: false },
      { id: 'm10-s4', title: 'Data Persistence', completed: false },
      { id: 'm10-s5', title: 'Versioning', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a collaborative text editing system like Google Docs. Consider conflict resolution, operational transforms, and real-time updates.'
  },
  {
    id: 'm11',
    title: 'Design a distributed task scheduler',
    difficulty: 'medium',
    subtopics: [
      { id: 'm11-s1', title: 'Task Distribution', completed: false },
      { id: 'm11-s2', title: 'Worker Management', completed: false },
      { id: 'm11-s3', title: 'Fault Tolerance', completed: false },
      { id: 'm11-s4', title: 'Monitoring', completed: false },
      { id: 'm11-s5', title: 'Scaling', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed task scheduling system like Airflow or Celery. Consider task dependencies, retries, and resource allocation.'
  },
  {
    id: 'm12',
    title: 'Design a payment processing system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm12-s1', title: 'Payment Gateway Integration', completed: false },
      { id: 'm12-s2', title: 'Transaction Processing', completed: false },
      { id: 'm12-s3', title: 'Security Measures', completed: false },
      { id: 'm12-s4', title: 'Error Handling', completed: false },
      { id: 'm12-s5', title: 'Fraud Detection', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a payment processing system that can handle credit card transactions and other payment methods. Consider security, fault tolerance, and compliance requirements.'
  },
  {
    id: 'm13',
    title: 'Design a distributed logging system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm13-s1', title: 'Log Collection', completed: false },
      { id: 'm13-s2', title: 'Storage Strategy', completed: false },
      { id: 'm13-s3', title: 'Searching/Indexing', completed: false },
      { id: 'm13-s4', title: 'Visualization', completed: false },
      { id: 'm13-s5', title: 'Alerting', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed logging system like the ELK stack. Consider log collection, storage, querying, and monitoring.'
  },
  {
    id: 'm14',
    title: 'Design an e-commerce checkout system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm14-s1', title: 'Cart Management', completed: false },
      { id: 'm14-s2', title: 'Inventory Verification', completed: false },
      { id: 'm14-s3', title: 'Payment Processing', completed: false },
      { id: 'm14-s4', title: 'Order Fulfillment', completed: false },
      { id: 'm14-s5', title: 'Error Handling', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a checkout system for an e-commerce platform. Consider cart management, payment processing, and inventory checks.'
  },
  {
    id: 'm15',
    title: 'Design a user authentication system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm15-s1', title: 'Authentication Protocols', completed: false },
      { id: 'm15-s2', title: 'Password Management', completed: false },
      { id: 'm15-s3', title: 'Session Management', completed: false },
      { id: 'm15-s4', title: 'Multi-factor Authentication', completed: false },
      { id: 'm15-s5', title: 'Security Measures', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a comprehensive user authentication system. Consider password hashing, OAuth, JWT, and multi-factor authentication.'
  },
  {
    id: 'm16',
    title: 'Design a recommendation engine',
    difficulty: 'medium',
    subtopics: [
      { id: 'm16-s1', title: 'Data Collection', completed: false },
      { id: 'm16-s2', title: 'Algorithm Selection', completed: false },
      { id: 'm16-s3', title: 'Feature Engineering', completed: false },
      { id: 'm16-s4', title: 'Real-time Processing', completed: false },
      { id: 'm16-s5', title: 'Performance Optimization', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a recommendation engine for products or content. Consider collaborative filtering, content-based filtering, and hybrid approaches.'
  },
  {
    id: 'm17',
    title: 'Design a job board system',
    difficulty: 'medium',
    subtopics: [
      { id: 'm17-s1', title: 'Job Listing', completed: false },
      { id: 'm17-s2', title: 'Search Functionality', completed: false },
      { id: 'm17-s3', title: 'Application Process', completed: false },
      { id: 'm17-s4', title: 'Matching Algorithm', completed: false },
      { id: 'm17-s5', title: 'Notification System', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a job board system like LinkedIn Jobs or Indeed. Consider search functionality, application tracking, and employer-candidate matching.'
  },
  {
    id: 'm18',
    title: 'Design a distributed file storage service',
    difficulty: 'medium',
    subtopics: [
      { id: 'm18-s1', title: 'Storage Architecture', completed: false },
      { id: 'm18-s2', title: 'File Upload/Download', completed: false },
      { id: 'm18-s3', title: 'Replication Strategy', completed: false },
      { id: 'm18-s4', title: 'Metadata Management', completed: false },
      { id: 'm18-s5', title: 'Access Control', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed file storage service like Dropbox or Google Drive. Consider file synchronization, access control, and versioning.'
  },
  {
    id: 'm19',
    title: 'Design a chat messaging service',
    difficulty: 'medium',
    subtopics: [
      { id: 'm19-s1', title: 'Message Delivery', completed: false },
      { id: 'm19-s2', title: 'Presence System', completed: false },
      { id: 'm19-s3', title: 'Group Chat', completed: false },
      { id: 'm19-s4', title: 'Media Sharing', completed: false },
      { id: 'm19-s5', title: 'Offline Support', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a chat messaging service like WhatsApp or Slack. Consider real-time message delivery, presence indicators, and group chat functionality.'
  },
  {
    id: 'm20',
    title: 'Design a video streaming platform',
    difficulty: 'medium',
    subtopics: [
      { id: 'm20-s1', title: 'Content Delivery', completed: false },
      { id: 'm20-s2', title: 'Encoding Pipeline', completed: false },
      { id: 'm20-s3', title: 'Adaptive Bitrate', completed: false },
      { id: 'm20-s4', title: 'Content Recommendations', completed: false },
      { id: 'm20-s5', title: 'Analytics', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a video streaming platform like YouTube or Netflix. Consider video encoding, streaming protocols, and content delivery.'
  }
];

export const moreHardQuestions: Question[] = [
  {
    id: 'h4',
    title: 'Design a distributed database',
    difficulty: 'hard',
    subtopics: [
      { id: 'h4-s1', title: 'Data Partitioning', completed: false },
      { id: 'h4-s2', title: 'Replication Strategy', completed: false },
      { id: 'h4-s3', title: 'Consistency Model', completed: false },
      { id: 'h4-s4', title: 'Query Processing', completed: false },
      { id: 'h4-s5', title: 'Fault Tolerance', completed: false },
      { id: 'h4-s6', title: 'Scaling Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed database system like Cassandra or MongoDB. Consider data partitioning, consistency models, and distributed query processing.'
  },
  {
    id: 'h5',
    title: 'Design a real-time analytics platform',
    difficulty: 'hard',
    subtopics: [
      { id: 'h5-s1', title: 'Data Ingestion', completed: false },
      { id: 'h5-s2', title: 'Stream Processing', completed: false },
      { id: 'h5-s3', title: 'Storage Architecture', completed: false },
      { id: 'h5-s4', title: 'Query Engine', completed: false },
      { id: 'h5-s5', title: 'Visualization Layer', completed: false },
      { id: 'h5-s6', title: 'Scaling Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a real-time analytics platform that can process and analyze streaming data. Consider event processing, storage, and query capabilities.'
  },
  {
    id: 'h6',
    title: 'Design a distributed consensus system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h6-s1', title: 'Consensus Protocol', completed: false },
      { id: 'h6-s2', title: 'Leader Election', completed: false },
      { id: 'h6-s3', title: 'Failure Detection', completed: false },
      { id: 'h6-s4', title: 'State Replication', completed: false },
      { id: 'h6-s5', title: 'Performance Optimization', completed: false },
      { id: 'h6-s6', title: 'Fault Tolerance', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed consensus system using algorithms like Paxos or Raft. Consider fault tolerance, leader election, and state replication.'
  },
  {
    id: 'h7',
    title: 'Design a global content delivery network',
    difficulty: 'hard',
    subtopics: [
      { id: 'h7-s1', title: 'Global Infrastructure', completed: false },
      { id: 'h7-s2', title: 'Request Routing', completed: false },
      { id: 'h7-s3', title: 'Caching Strategy', completed: false },
      { id: 'h7-s4', title: 'Content Optimization', completed: false },
      { id: 'h7-s5', title: 'DDoS Protection', completed: false },
      { id: 'h7-s6', title: 'Analytics', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a global content delivery network like Cloudflare or Akamai. Consider edge server distribution, request routing, and caching strategies.'
  },
  {
    id: 'h8',
    title: 'Design a stock trading system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h8-s1', title: 'Order Matching Engine', completed: false },
      { id: 'h8-s2', title: 'Real-time Data Processing', completed: false },
      { id: 'h8-s3', title: 'Low Latency Architecture', completed: false },
      { id: 'h8-s4', title: 'Risk Management', completed: false },
      { id: 'h8-s5', title: 'Regulatory Compliance', completed: false },
      { id: 'h8-s6', title: 'Fault Tolerance', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a stock trading system with low latency and high throughput. Consider order matching, market data distribution, and regulatory requirements.'
  },
  {
    id: 'h9',
    title: 'Design a social network',
    difficulty: 'hard',
    subtopics: [
      { id: 'h9-s1', title: 'User Graph', completed: false },
      { id: 'h9-s2', title: 'News Feed', completed: false },
      { id: 'h9-s3', title: 'Content Storage', completed: false },
      { id: 'h9-s4', title: 'Notification System', completed: false },
      { id: 'h9-s5', title: 'Privacy Controls', completed: false },
      { id: 'h9-s6', title: 'Scaling Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a social networking platform like Facebook. Consider user connections, content sharing, news feed generation, and privacy.'
  },
  {
    id: 'h10',
    title: 'Design a distributed search engine',
    difficulty: 'hard',
    subtopics: [
      { id: 'h10-s1', title: 'Web Crawler', completed: false },
      { id: 'h10-s2', title: 'Indexing System', completed: false },
      { id: 'h10-s3', title: 'Query Processing', completed: false },
      { id: 'h10-s4', title: 'Ranking Algorithm', completed: false },
      { id: 'h10-s5', title: 'Caching Layer', completed: false },
      { id: 'h10-s6', title: 'Scaling Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed web search engine like Google. Consider web crawling, indexing, ranking algorithms, and query processing.'
  },
  {
    id: 'h11',
    title: 'Design a cloud object storage system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h11-s1', title: 'Storage Architecture', completed: false },
      { id: 'h11-s2', title: 'Data Replication', completed: false },
      { id: 'h11-s3', title: 'Durability Guarantees', completed: false },
      { id: 'h11-s4', title: 'Access Control', completed: false },
      { id: 'h11-s5', title: 'Versioning', completed: false },
      { id: 'h11-s6', title: 'Encryption', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a cloud object storage system like Amazon S3. Consider data durability, access control, and scalability.'
  },
  {
    id: 'h12',
    title: 'Design a massively multiplayer online game',
    difficulty: 'hard',
    subtopics: [
      { id: 'h12-s1', title: 'Game State Management', completed: false },
      { id: 'h12-s2', title: 'Real-time Communication', completed: false },
      { id: 'h12-s3', title: 'Sharding Strategy', completed: false },
      { id: 'h12-s4', title: 'Anti-Cheating Measures', completed: false },
      { id: 'h12-s5', title: 'Scalability', completed: false },
      { id: 'h12-s6', title: 'Fault Tolerance', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design the server architecture for a massively multiplayer online game. Consider game state synchronization, networking, and scaling.'
  },
  {
    id: 'h13',
    title: 'Design a real-time collaborative editing system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h13-s1', title: 'Operational Transforms', completed: false },
      { id: 'h13-s2', title: 'Conflict Resolution', completed: false },
      { id: 'h13-s3', title: 'Real-time Sync', completed: false },
      { id: 'h13-s4', title: 'Versioning', completed: false },
      { id: 'h13-s5', title: 'Permissions', completed: false },
      { id: 'h13-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a system for real-time collaborative editing like Google Docs. Consider operational transforms, conflict resolution, and real-time synchronization.'
  },
  {
    id: 'h14',
    title: 'Design a distributed transaction system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h14-s1', title: 'Two-Phase Commit', completed: false },
      { id: 'h14-s2', title: 'Consistency Guarantees', completed: false },
      { id: 'h14-s3', title: 'Failure Recovery', completed: false },
      { id: 'h14-s4', title: 'Performance Optimization', completed: false },
      { id: 'h14-s5', title: 'Deadlock Prevention', completed: false },
      { id: 'h14-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a system that can handle distributed transactions across multiple services. Consider two-phase commit, saga patterns, and eventual consistency.'
  },
  {
    id: 'h15',
    title: 'Design a distributed cache',
    difficulty: 'hard',
    subtopics: [
      { id: 'h15-s1', title: 'Cache Architecture', completed: false },
      { id: 'h15-s2', title: 'Consistency Model', completed: false },
      { id: 'h15-s3', title: 'Eviction Policy', completed: false },
      { id: 'h15-s4', title: 'Sharding Strategy', completed: false },
      { id: 'h15-s5', title: 'Fault Tolerance', completed: false },
      { id: 'h15-s6', title: 'Hot Key Problem', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed caching system like Redis Cluster. Consider data distribution, eviction policies, and fault tolerance.'
  },
  {
    id: 'h16',
    title: 'Design a payment gateway',
    difficulty: 'hard',
    subtopics: [
      { id: 'h16-s1', title: 'Transaction Processing', completed: false },
      { id: 'h16-s2', title: 'Security Measures', completed: false },
      { id: 'h16-s3', title: 'Compliance Requirements', completed: false },
      { id: 'h16-s4', title: 'Integration Architecture', completed: false },
      { id: 'h16-s5', title: 'Fraud Detection', completed: false },
      { id: 'h16-s6', title: 'Fault Tolerance', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a payment gateway system like Stripe or PayPal. Consider security, compliance, and transaction processing.'
  },
  {
    id: 'h17',
    title: 'Design a distributed monitoring system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h17-s1', title: 'Data Collection', completed: false },
      { id: 'h17-s2', title: 'Storage Strategy', completed: false },
      { id: 'h17-s3', title: 'Alerting Mechanism', completed: false },
      { id: 'h17-s4', title: 'Visualization', completed: false },
      { id: 'h17-s5', title: 'Anomaly Detection', completed: false },
      { id: 'h17-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed monitoring system like Prometheus or Datadog. Consider metrics collection, storage, and alerting.'
  },
  {
    id: 'h18',
    title: 'Design a content moderation system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h18-s1', title: 'Classification Algorithms', completed: false },
      { id: 'h18-s2', title: 'Processing Pipeline', completed: false },
      { id: 'h18-s3', title: 'Human Review Integration', completed: false },
      { id: 'h18-s4', title: 'Real-time Capabilities', completed: false },
      { id: 'h18-s5', title: 'Feedback Loop', completed: false },
      { id: 'h18-s6', title: 'Scaling Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a content moderation system for a social platform. Consider automated filtering, human review workflows, and real-time processing.'
  },
  {
    id: 'h19',
    title: 'Design a distributed coordination service',
    difficulty: 'hard',
    subtopics: [
      { id: 'h19-s1', title: 'Consensus Protocol', completed: false },
      { id: 'h19-s2', title: 'Data Model', completed: false },
      { id: 'h19-s3', title: 'Watcher Mechanism', completed: false },
      { id: 'h19-s4', title: 'Failure Detection', completed: false },
      { id: 'h19-s5', title: 'Session Management', completed: false },
      { id: 'h19-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed coordination service like Apache ZooKeeper. Consider consensus, configuration management, and distributed synchronization.'
  },
  {
    id: 'h20',
    title: 'Design a recommendation system at scale',
    difficulty: 'hard',
    subtopics: [
      { id: 'h20-s1', title: 'Data Collection', completed: false },
      { id: 'h20-s2', title: 'Feature Engineering', completed: false },
      { id: 'h20-s3', title: 'Model Training', completed: false },
      { id: 'h20-s4', title: 'Real-time Inference', completed: false },
      { id: 'h20-s5', title: 'A/B Testing', completed: false },
      { id: 'h20-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a large-scale recommendation system like those used by Netflix or Amazon. Consider data processing, model training, and real-time serving.'
  }
];
