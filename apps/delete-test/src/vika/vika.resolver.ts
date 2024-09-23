import * as graphql from "@nestjs/graphql";
import { VikaResolverBase } from "./base/vika.resolver.base";
import { Vika } from "./base/Vika";
import { VikaService } from "./vika.service";

@graphql.Resolver(() => Vika)
export class VikaResolver extends VikaResolverBase {
  constructor(protected readonly service: VikaService) {
    super(service);
  }
}
