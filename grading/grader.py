from scorer import Scorer


def grade(pull_request):
    if pull_request.travis_build() is None:
        print ("travis not build - branch has conflicts")
        return -1
    print(pull_request.travis_build().url())
    pull_request.check_test_modifications()

    scorer = Scorer(pull_request)
    score, comment = scorer.compute()
    print("score:{s} comment:{c}".format(s=score, c=comment))
    return score, comment
