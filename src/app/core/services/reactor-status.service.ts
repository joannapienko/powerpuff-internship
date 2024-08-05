import { Injectable } from '@angular/core';
import { ImageModel } from '../models/image.model';
import { Observable, of } from 'rxjs';
import * as dataReactorImages from '../../../assets/mocks/reactorsImages.json';
import * as dataReactor from '../../../assets/mocks/reactors.json';
import * as dataImage from '../../../assets/mocks/images.json';

import { ReactorModel, ReactorModelDTO } from '../models/reactor.model';
import { Status } from '../enums/status.enum';
import { SafetyStatusModel } from '../models/safetyStatus.model';
import { toReactorModel } from '../mappers/reactor-model.mapper';

@Injectable({
  providedIn: 'root',
})
export class ReactorStatusService {
  constructor() {}

  getReactorImagesList(): Observable<ImageModel[]> {
    return of(dataReactorImages.images);
  }

  getReactors(): Observable<ReactorModel[]> {
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
