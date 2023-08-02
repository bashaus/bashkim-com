module "structure_domain" {
  source = "./modules/structure/domain"

  design_system_distribution_domain_name    = module.package_design_system.distribution_domain_name
  design_system_distribution_hosted_zone_id = module.package_design_system.distribution_hosted_zone_id
  website_distribution_domain_name          = module.structure_cdn.distribution_domain_name
  website_distribution_hosted_zone_id       = module.structure_cdn.distribution_hosted_zone_id
}
