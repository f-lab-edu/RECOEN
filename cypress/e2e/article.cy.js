describe('article CRUD spec', () => {
  context('작성하기 페이지에서', () => {
    before(() => {
      cy.visit('/write');
    });

    context('관리자 권한이 없으면', () => {
      it('"해당 페이지를 이용할 수 있는 권한이 없습니다." 라는 문구를 가진 모달이 나온다', () => {
        cy.contains('해당 페이지를 이용할 수 있는 권한이 없습니다.').should(
          'exist',
        );
      });
    });

    context('관리자 권한이 있으면', () => {
      beforeEach(() => {
        cy.login();
        cy.visit('/write');
        cy.wait('@session');
      });

      context('글을 작성하는데,', () => {
        context('제목과 내용 중 입력하지 않은 요소가 있으면', () => {
          it('작성하기 버튼이 비활성화 되어야 한다.', () => {
            cy.contains('게시하기').should('be.disabled');
          });
        });

        context('제목과 내용을 다 입력했다면,', () => {
          it('작성하기 버튼이 활성화 되어야 한다.', () => {
            cy.handleTitleContentInputs();
            cy.contains('게시하기').should('be.enabled');
          });

          beforeEach(() => {
            cy.handleTitleContentInputs();
            cy.contains('게시하기').click();
          });

          context('작성하기 버튼을 클릭하면', () => {
            context('썸네일, 태그, 설명문을 입력하는 모달이 나오는데', () => {
              context('하나의 요소라도 입력하지 않았다면,', () => {
                it('저장 버튼이 비활성화 되어야 한다.', () => {
                  cy.contains('저장').should('be.disabled');
                });
              });

              context('모든 요소가 입력되었다면', () => {
                beforeEach(() => {
                  cy.fillArticleMetaData();
                });

                it('작성하기 버튼이 활성화 되어야 한다.', () => {
                  cy.contains('저장').should('be.enabled');
                });

                context('작성하기 버튼을 클릭하면', () => {
                  it('아티클 리스트 페이지에 글과 태그가 추가되어야 한다.', () => {
                    cy.contains('저장')
                      .should('be.enabled')
                      .then((element) => {
                        element.click();
                      });

                    cy.contains('제목').should('exist');
                    cy.contains('태그').should('exist');
                    cy.contains('설명문').should('exist');
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  context('아티클 리스트 페이지에서', () => {
    beforeEach(() => {
      cy.login();
      cy.visit(`/programming`);
      cy.wait('@session');
    });

    context('새로 추가된 글을 클릭하면', () => {
      it('상세 페이지를 보여준다.', () => {
        cy.get("[data-testid='article']").first().click();
        cy.wait(2000);

        cy.get("[data-testid='article-detail-title']").should('exist');
      });

      context('상세 페이지에서', () => {
        context('수정 버튼을 클릭하면', () => {
          it('해당 글과 태그를 수정할 수 있다.', () => {
            cy.get("[data-testid='article']").first().click();

            cy.wait(2000);
            cy.contains('수정').click();

            cy.handleTitleContentInputs(
              {
                title: '수정된 제목',
                content: '수정된 내용',
              },
              { isClear: true },
            );

            cy.contains('게시하기').click();
            cy.contains('저장').click();

            cy.contains('수정된 제목').should('exist');
          });

          context('수정된 글을 클릭한 후', () => {
            context('삭제 버튼을 클릭하면', () => {
              it('해당 게시글은 삭제되어야 한다', () => {
                cy.contains('수정된 제목').click();

                cy.contains('삭제').click();

                cy.contains('수정된 제목').should('be.not.exist');
              });
            });
          });
        });
      });
    });
  });
});
