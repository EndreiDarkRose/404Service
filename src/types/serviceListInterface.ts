interface Service {
  title: string;
  price: string;
}

interface ServicesCategory {
  category: string;
  service: Service[];
}

export type ServicesList = ServicesCategory[];
