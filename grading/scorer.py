from pytest_ext import TestDef


#CODE_CLIMATE_SCORE = 5
#PYTESTS = TestDef.collect('..')
TOTAL_BASE_SCORE = 100
SCRIPT_TEST = {'validate_html': 10, 'lint_js': 10, 'check_ajax': 80}

def verify_totals():
    """Ensure that the base scores sum to {}.""".format(TOTAL_BASE_SCORE)
    total = CODE_CLIMATE_SCORE
    for test_def in PYTESTS:
        if not test_def.extra_credit:
            total += test_def.score

    if total != TOTAL_BASE_SCORE:
        raise ValueError("Scores for non-extra-credit tests: {}".format(total))

#verify_totals()


class PytestResult:
    def __init__(self, pytest_data):
        self.name = pytest_data['name']
        self.outcome = pytest_data['outcome'].lower()

    def passed(self):
        return self.outcome == 'passed' or self.outcome == 'xpass'


class Scorer:
    def __init__(self, pull_request):
        self.pull_request = pull_request

    def pytest_results(self):
        pytest_report = self.pull_request.travis_build().pytest_report()
        return pytest_report

    def result_by_test_name(self):
        results = self.pytest_results()
        return {r.name: r for r in results}

    def compute(self):
        total_score = 0

        # if self.pull_request.code_climate_passed():
        #     total_score += CODE_CLIMATE_SCORE
        reports = self.pytest_results()
        for report in reports:
            for tester in SCRIPT_TEST.keys():
                if tester in report:
                    total_score += SCRIPT_TEST[tester] if int(report[-1]) == 0 else 0
                    break
        return total_score
