describe('article CRUD spec', () => {
  before(() => {
    cy.login();
    cy.visit('/');
    cy.wait('@session');
  });

  context('작성하기 페이지에서', () => {
    beforeEach(() => {
      cy.visit('/write');
    });

    context('관리자 권한을 가지고 있는지 확인하고', () => {
      context('관리자 권한이 없으면', () => {
        it('로그인 모달이 나온다', () => {});
      });

      context('관리자 권한이 있으면', () => {
        context('글을 작성하는데,', () => {
          context('제목과 내용 중 입력하지 않은 요소가 있으면', () => {
            it('작성하기 버튼이 비활성화 되어야 한다.', () => {
              // cy.get("[data-testid='write-button']").should('be.disabled');
            });
          });

          context('모든 요소를 다 입력했다면,', () => {
            it('작성하기 버튼이 활성화 되어야 한다.', () => {
              // cy.get("[data-testid='editor-title-input']").type(
              //   'title 입니다.',
              //   {
              //     force: true,
              //   },
              // );
              // cy.get('.toastui-editor-pseudo-clipboard').type(
              //   'content 입니다.',
              //   {
              //     force: true,
              //   },
              // );
              // cy.get("[data-testid='write-button']").should('be.enabled');
            });

            context('작성하기 버튼을 클릭하면', () => {
              context('썸네일, 태그, 설명문을 입력하는 모달이 나오는데', () => {
                context('하나의 요소라도 입력하지 않았다면,', () => {
                  it('작성하기 버튼이 비활성화 되어야 한다.', () => {
                    // cy.get("[data-testid='write-button']").click();
                    // cy.get("[data-testid='send-write-button']").should('be.disabled');
                  });
                });
                context('모든 요소가 입력되었다면', () => {
                  it('작성하기 버튼이 활성화 되어야 한다.', () => {
                    // cy.get("[data-testid='write-button']").click();
                    // cy.get("[data-testid='send-write-button']").should('be.enabled');
                  });
                  context('작성하기 버튼을 클릭하면', () => {
                    it('아티클 리스트 페이지에 글과 태그가 추가되어야 한다.', () => {});
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
      // cy.fixture('session').then((session) => {
      //   cy.login();
      //   cy.visit(`/programming`);
      //   cy.wait('@session');
      // });
    });

    context('새로 추가된 글을 클릭하면', () => {
      it('상세 페이지를 보여준다.', () => {
        cy.get("[data-testid='article-title']").first().click();

        cy.get("[data-testid='article-head']").should('exist');
      });
    });

    context('상세 페이지에서', () => {
      context('수정 버튼을 클릭하면', () => {
        it('해당 글과 태그를 수정할 수 있다.', () => {});
      });

      context('삭제 버튼을 클릭하면', () => {
        it('해당 글은 태그와 함께 삭제 되어야 한다.', () => {});
      });
    });
  });
});
