export interface IEventFeedSubscriber {
    receiveEvent(event: any): void;
}