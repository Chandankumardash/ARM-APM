public without sharing class CompanyController {

    @AuraEnabled(cacheable = true)
    public static List<Company__c> getCompanies() {
        return [select Id, Name__c, shortName__c, On_Site_Employee__c, Approved_Type__c, Approved_By__c, Budget__c, Capability__c, Opening_Date__c, Quality__c, Safety__c, Score__c, Status__c from Company__c];
    }
}