import { SafetyStatusModel } from '../../core/models/safetyStatus.model';
import { ReactorModel } from '../../core/models/reactor.model';
import { ImageModel } from '../../core/models/image.model';

export interface ReactorsStateModel {
  reactors: ReactorModel[];
  reactorsSafetyStatus?: SafetyStatusModel;
  reactorsImages: ImageModel[];
  locationsImage?: ImageModel;

  loadingReactors: boolean;
  loadingSafetyStatus: boolean;
  loadingReactorsImages: boolean;
  loadingLocationImage: boolean;

  errorReactors: boolean;
  errorSafetyStatus: boolean;
  errorReactorsImages: boolean;
  errorLocationImage: boolean;
}
