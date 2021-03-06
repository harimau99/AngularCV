import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { CvItem } from "./cv-item";
import { GENERAL, CVITEMS, CERTIFICATES, EDUCATION, PROJECTS, VOLUNTEERING, LANGUAGES, CONTACT, INTERESTS } from './cv-items.data';

@Injectable()
export class CvItemService {

  constructor() { }

  getGeneralData() {
    return GENERAL;
  }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(CVITEMS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(CONTACT);
  }

  getInterestItems() {
    return Promise.resolve(INTERESTS);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
