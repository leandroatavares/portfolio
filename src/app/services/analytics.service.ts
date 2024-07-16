import { Injectable } from '@angular/core';

declare const gtag: any;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  /**
   * Generate a new trached event in Google Analytics
   * @param eventName the label that will show up in the dashboard as the events name
   * @param eventDetails a short description of what happened
   * @param eventCategory event Type - example: 'SCROLL_TO_TOP_CLICKED'
   */
  trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventName,
      'value': eventDetails
    })
  }
}