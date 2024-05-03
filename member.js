function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'app/members/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}