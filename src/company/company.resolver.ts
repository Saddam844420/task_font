import { Resolver,Query,Mutation,Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyModel } from './model/compnay.model';
import { Company } from 'generated/prisma';
@Resolver()
export class CompanyResolver {
    constructor(private readonly companyService: CompanyService){}

    @Query(() => [CompanyModel])
    async getCompanies(){
        return this.companyService.getCompanies();
    }
}
