import { LocationController } from './controllers/location.controller';
import { LocationRepository } from './repositories/location.repository';
import { LocationService } from './services/location.service';

export function createLocationsModule() {
  const locationRepository = new LocationRepository();

  const locationService = new LocationService(locationRepository);

  return {
    services: {
      locationService,
    },

    controllers: {
      locationController: new LocationController(locationService),
    },
  };
}
