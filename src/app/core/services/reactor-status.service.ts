import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { map, Observable, of } from 'rxjs';
import * as dataReactorImages from '../../../assets/mocks/reactorsImages.json';
import * as dataReactor from '../../../assets/mocks/reactors.json';
import * as dataImage from '../../../assets/mocks/images.json';

import { ReactorModel, ReactorModelDTO } from '../models/reactor.model';
import { Status } from '../enums/status.enum';
import { SafetyStatusModel } from '../models/safetyStatus.model';
import { toReactorModel } from '../mappers/reactor-model.mapper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReactorStatusService {
  environments = {
    baseUrl: 'https://powerpuffintershipbe.azurewebsites.net/api',
    reactorImageList: '/Reactor/image-list',
    reactorList: '/Reactor',
  };

  constructor(private http: HttpClient) {}

  getReactorImagesList(): Observable<ImageModel[]> {
    const url = this.environments.baseUrl + this.environments.reactorImageList;
    return this.http.get<ImageModel[]>(url);
    // return of(dataReactorImages.images);
  }

  getReactors(): Observable<ReactorModel[]> {
    const url = this.environments.baseUrl + this.environments.reactorList;
    return this.http
      .get<ReactorModelDTO[]>(url)
      .pipe(map((response) => toReactorModel(response)));
    return of(toReactorModel(dataReactor.list as ReactorModelDTO[]));
  }

  getReactorsSafetyStatus(): Observable<SafetyStatusModel> {
    const data = {
      ...dataReactor.status,
      statusPowerProduction: dataReactor.status.statusPowerProduction as Status,
      statusCoreTemperature: dataReactor.status.statusCoreTemperature as Status,
    };

    return of(data);
  }

  getReactorLocationImage(): Observable<ImageModel> {
    return of(dataImage.data);
  }
}
